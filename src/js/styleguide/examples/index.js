import check from "../../util/log/check";
import initSelectedExampleContainer from "./initSelectedExampleContainer";
import listenOpenExample from "./listenOpenExample";

const initExamples = () => {
  const selectedExampleContainerElements = document.querySelectorAll(
    ".styleguide-example-container"
  );

  if (
    check(
      selectedExampleContainerElements.length !== 0,
      "You should add a `.styleguide-example-container` before using `.styleguide-example`."
    )
  ) {
    check(
      selectedExampleContainerElements.length === 1,
      "You shouldn't have two `.styleguide-example-container` on your page. Only the first one will be used.",
      selectedExampleContainerElements
    );

    const selectedExampleContainer = initSelectedExampleContainer(
      selectedExampleContainerElements[0]
    );

    const examples = document.querySelectorAll(".styleguide-example");
    for (var i = 0; i < examples.length; i++) {
      listenOpenExample(selectedExampleContainer, examples[i]);
    }
  }
};

export default initExamples;
