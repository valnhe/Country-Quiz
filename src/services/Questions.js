export function doQuestion (countries) {
    const firstQuestion = {
      question: `What is the capital of ${countries[0].name.common}?`,
      answers: [
        { question: countries[0].name.common, answer: (countries[0]?.capital?.[0]) ? countries[0]?.capital?.[0] : "Fail data" },
        { question: countries[1].name.common, answer: (countries[1]?.capital?.[0]) ? countries[1]?.capital?.[0] : "Fail data" },
        { question: countries[2].name.common, answer: (countries[2]?.capital?.[0]) ? countries[2]?.capital?.[0] : "Fail data" },
        { question: countries[3].name.common, answer: (countries[3]?.capital?.[0]) ? countries[3]?.capital?.[0] : "Fail data" },
      ],
      correct: (countries[0]?.capital?.[0] ? countries[0].capital[0] : "Fail data")
    }

    firstQuestion.answers.sort(() => Math.random() - 0.5);

    const secondQuestion = {
      question: `Which country is ${(countries[4]?.capital?.[0] ? countries[4].capital[0] : "Fail data")} the capital?`,
      answers: [
        { question: countries[4]?.capital?.[0] ? countries[4].capital[0] : "Fail data", answer: countries[4]?.name?.common || "Fail data" },
        { question: countries[5]?.capital?.[0] ? countries[5].capital[0] : "Fail data", answer: countries[5]?.name?.common || "Fail data" },
        { question: countries[6]?.capital?.[0] ? countries[6].capital[0] : "Fail data", answer: countries[6]?.name?.common || "Fail data" },
        { question: countries[7]?.capital?.[0] ? countries[7].capital[0] : "Fail data", answer: countries[7]?.name?.common || "Fail data" },

      ],
      correct: countries[4].name.common,
    };

    secondQuestion.answers.sort(() => Math.random() - 0.5);

    const thirdQuestion = {
        question: `What is the region of ${countries[8].name.common}?`,
        answers: [
            { question: countries[8].name.common, answer: countries[8].region || "Fail data" },
            { question: countries[9].name.common, answer: countries[9].region || "Fail data" },
            { question: countries[10].name.common, answer: countries[10].region || "Fail data" },
            { question: countries[11].name.common, answer: countries[11].region || "Fail data" },
          ],
        correct: countries[8].region,
      };
    
    thirdQuestion.answers.sort(() => Math.random() - 0.5);

    const fourthQuestion = {
      question: `What is the subregion of ${countries[12].name.common}?`,
      answers: [
          { question: countries[12].name.common, answer: countries[12].subregion || "Fail data" },
          { question: countries[13].name.common, answer: countries[13].subregion || "Fail data" },
          { question: countries[14].name.common, answer: countries[14].subregion || "Fail data" },
          { question: countries[15].name.common, answer: countries[15].subregion || "Fail data" },
        ],
      correct: countries[12].subregion,
    };
  
    fourthQuestion.answers.sort(() => Math.random() - 0.5);

    const fifthQuestion = {
      question: `What is the code of ${countries[16].name.common}?`,
      answers: [
          { question: countries[16].name.common, answer: countries[16].cca2 || "Fail data" },
          { question: countries[17].name.common, answer: countries[17].cca2 || "Fail data" },
          { question: countries[18].name.common, answer: countries[18].cca2 || "Fail data" },
          { question: countries[19].name.common, answer: countries[19].cca2 || "Fail data" },
        ],
      correct: countries[16].cca2,
    };

    fifthQuestion.answers.sort(() => Math.random() - 0.5);

    const sixthQuestion = {
      question: `What is the capital of ${countries[20].name.common}?`,
      answers: [
        { question: countries[20].name.common, answer: countries[20]?.capital?.[0] ?  countries[20].capital?.[0] :  "Fail data" },
        { question: countries[21].name.common, answer: countries[21]?.capital?.[0] ?  countries[21].capital?.[0] :  "Fail data" },
        { question: countries[22].name.common, answer: countries[22]?.capital?.[0] ?  countries[22].capital?.[0] :  "Fail data" },
        { question: countries[23].name.common, answer: countries[23]?.capital?.[0] ?  countries[23].capital?.[0] :  "Fail data" },
      ],
      correct: (countries[20]?.capital?.[0] ? countries[20].capital[0] : "Fail data")
    }

    sixthQuestion.answers.sort(() => Math.random() - 0.5);

    const seventhQuestion = {
      question: `Which country is ${(countries[24]?.capital?.[0] ? countries[4]?.capital?.[0] : "Fail data")} the capital?`,
      answers: [
        { question: countries[24]?.capital?.[0] ? countries[24].capital[0] : "Fail data", answer: countries[24]?.name?.common || "Fail data" },
        { question: countries[25]?.capital?.[0] ? countries[25].capital[0] : "Fail data", answer: countries[25]?.name?.common || "Fail data" },
        { question: countries[26]?.capital?.[0] ? countries[26].capital[0] : "Fail data", answer: countries[26]?.name?.common || "Fail data" },
        { question: countries[27]?.capital?.[0] ? countries[27].capital[0] : "Fail data", answer: countries[27]?.name?.common || "Fail data" },

      ],
      correct: countries[24].name.common,
    };

    seventhQuestion.answers.sort(() => Math.random() - 0.5);

    const eighthQuestion = {
      question: `What is the region of ${countries[28].name.common}?`,
      answers: [
          { question: countries[28].name.common, answer: countries[28].region || "Fail data" },
          { question: countries[29].name.common, answer: countries[29].region || "Fail data" },
          { question: countries[30].name.common, answer: countries[30].region || "Fail data" },
          { question: countries[31].name.common, answer: countries[21].region || "Fail data" },
        ],
      correct: countries[28].region,
    };
  
    eighthQuestion.answers.sort(() => Math.random() - 0.5);

    const ninthQuestion = {
      question: `What is the subregion of ${countries[32].name.common}?`,
      answers: [
          { question: countries[32].name.common, answer: countries[32].subregion || "Fail data" },
          { question: countries[33].name.common, answer: countries[33].subregion || "Fail data" },
          { question: countries[34].name.common, answer: countries[34].subregion || "Fail data" },
          { question: countries[35].name.common, answer: countries[35].subregion || "Fail data" },
        ],
      correct: countries[32].subregion,
    };

    ninthQuestion.answers.sort(() => Math.random() - 0.5);

    const tenthQuestion = {
      question: `What is the code of ${countries[36].name.common}?`,
      answers: [
          { question: countries[36].name.common, answer: countries[36].cca2 || "Fail data" },
          { question: countries[37].name.common, answer: countries[37].cca2 || "Fail data" },
          { question: countries[38].name.common, answer: countries[38].cca2 || "Fail data" },
          { question: countries[39].name.common, answer: countries[39].cca2 || "Fail data" },
        ],
      correct: countries[36].cca2,
    };

    tenthQuestion.answers.sort(() => Math.random() - 0.5);

    const allQuestion = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eighthQuestion, ninthQuestion, tenthQuestion];
    allQuestion.sort(() => Math.random() - 0.5);

    return allQuestion;
}