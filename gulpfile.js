const gulp = require("gulp");
const { spawn } = require("child_process");
const hugoBin = require("hugo-bin");
const gutil = require("gulp-util");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const cssnext = require("postcss-cssnext");
const cssUrl = require("postcss-url");
const BrowserSync = require("browser-sync");
const webpack = require("webpack");
const webpackConfig = require("./webpack.conf");

const getBaseUrl = () => {
  let baseUrl = process.env.HUGO_BASEURL || "/";
  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }
  return baseUrl;
};

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, { stdio: "inherit" }).on("close", code => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}

// Development tasks
gulp.task("hugo", cb => buildSite(cb));
gulp.task("hugo-preview", cb => buildSite(cb, hugoArgsPreview));

// Compile CSS with PostCSS
const css = () => {
  const baseUrl = getBaseUrl();
  return gulp
    .src("./src/css/*.css")
    .pipe(
      postcss([
        cssImport({ from: "./src/css/main.css" }),
        cssUrl([
          {
            filter: "**/fonts/**/*",
            url: asset => {
              return baseUrl + asset.url.replace(/^\//, "");
            }
          }
        ]),
        cssnext({
          browsers: ["> 0.25%"]
        })
      ])
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
};
gulp.task("css", css);

// Compile Javascript
const js = () => {
  const myConfig = Object.assign({}, webpackConfig);

  return new Promise((resolve, reject) => {
    webpack(myConfig, (err, stats) => {
      if (err) {
        return reject(new gutil.PluginError("webpack", err));
      }

      gutil.log(
        "[webpack]",
        stats.toString({
          colors: true,
          progress: true
        })
      );
      browserSync.reload();
      resolve();
    });
  });
}
gulp.task("js", js);

// Development server with browsersync
gulp.task(
  "server",
  gulp.series(
    gulp.parallel("hugo", "css", "js"),
    gulp.parallel(
      () => {
        return browserSync.init({
          server: {
            baseDir: "./dist"
          }
        });
      },
      () => gulp.watch("./src/js/**/*.js", js),
      () => gulp.watch("./src/css/**/*.css", css),
      () => gulp.watch("./site/**/*", buildSite)
    )
  )
);

// Build/production tasks
gulp.task(
  "build",
  gulp.series(gulp.parallel("css", "js"), cb => buildSite(cb, [], "production"))
);
gulp.task(
  "build-preview",
  gulp.series(gulp.parallel("css", "js"), cb =>
    buildSite(cb, hugoArgsPreview, "production")
  )
);
