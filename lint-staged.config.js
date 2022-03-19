const path = require('path');

// https://github.com/nrwl/nx/issues/869#issuecomment-1020910073
module.exports = {
  '*': (filesArray) => {
    const relativeFilesArray = filesArray.map((file) =>
      path.relative(__dirname, file)
    );
    const files = relativeFilesArray.join();

    return [
      `nx affected:lint --fix --files=${files}`,
      `nx affected:test --bail --files=${files}`,
      `nx format:write --files=${files}`,
    ];
  },
};
