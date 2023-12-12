import japanese from '../data/japanese.json';

export class DataUtilities{

    static getAllTopics(){
        return japanese.topics;
    
    }

    static getAllLanguages(){
        return japanese.languages
    }

    static getRandomWord(topicsArray){
        const filteredWords = [...japanese.dictionary];
        const random = Math.floor(Math.random()*filteredWords.length);

        return japanese.dictionary[random];
    }



}