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
    getLastWord(string) {
        const arrWords = this.split(string);
        return arrWords[arrWords.length - 1];
    },
    getFirstWord(string) {
        const arrWords = this.split(string);
        return arrWords[0];
    },
};

export { stringFormatting };
