import japanese from '../data/japanese.json';

export class DataUtilities{

    constructor() {
        this.allWordsByLanguageMap = {};
        this.wordsByLanguageAndTopicMap = {};
        japanese.dictionary.forEach(word => {
            Object.keys(word.languages).forEach(lang => {
                if (lang in this.allWordsByLanguageMap === false) {
                    this.allWordsByLanguageMap[lang] = [];
                }
                this.allWordsByLanguageMap[lang].push(word);                
            });
            word.topics.forEach(topic => {
                if (topic in this.wordsByLanguageAndTopicMap === false) {
                    this.wordsByLanguageAndTopicMap[topic] = {};
                }
                Object.keys(word.languages).forEach(lang => {
                    if (lang in this.wordsByLanguageAndTopicMap[topic] === false) {
                        this.wordsByLanguageAndTopicMap[topic][lang] = [];
                    }
                    this.wordsByLanguageAndTopicMap[topic][lang].push(word);                
                });
    
            });
        });

    }
    static getAllTopics(){
        return japanese.topics;
    
    }

    static getAllLanguages(){
        return japanese.languages;
    }

    getRandomWord(topic, language){
        console.log('Getting new word for', topic, language)
        let filteredWords;
        if (topic === null)
            if (language in this.allWordsByLanguageMap === false)
                return null;
            else
                filteredWords = [...this.allWordsByLanguageMap[language]]
        else
            if (topic in this.wordsByLanguageAndTopicMap === false ||
                language in this.wordsByLanguageAndTopicMap[topic] === false)
                return null
            else
                filteredWords = [...this.wordsByLanguageAndTopicMap[topic][language]];
       
        const random = Math.floor(Math.random() * filteredWords.length);

        return filteredWords[random];
    }



}