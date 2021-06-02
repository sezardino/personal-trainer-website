const stringFormatting = {
    split(string) {
        const stringArr = string.split(" ");
        const oneLetter = stringArr.find((item) => item.length === 1);
        if (oneLetter) {
            const index = stringArr.findIndex((item) => item === oneLetter);
            stringArr[index + 1] = `${stringArr[index]} ${
                stringArr[index + 1]
            }`;
            return stringArr.filter((item) => item !== oneLetter);
        }
        return stringArr;
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
