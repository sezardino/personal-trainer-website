const stringFormatting = {
    split(string) {
        return string.split(" ");
    },
    getFirstLetters(string) {
        return string.slice(0, 1);
    },
    deleteFirstLetters(string) {
        return string.slice(1);
    },
};

export { stringFormatting };
