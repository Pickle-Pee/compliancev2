import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { Loading } from '../components/Loading';

const EducationScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  useEffect(() => {
    Promise.all([
        axios.get('https://wavcpr2m09.api.quickmocker.com/answers')
    ])
        .then((response) => {
            const data = response[0].data;
            setQuestions(data);
            console.log(questions)
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        })
}, []);

  const handleAnswerPress = (index) => {
    setSelectedAnswerIndex(index);
  };

  // const handleNextPress = () => {
  //   const nextQuestionIndex = currentQuestionIndex;
  //   setCurrentQuestionIndex(nextQuestionIndex);
  //   setSelectedAnswerIndex(null);
  // };

  // const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;

  // console.log(currentQuestion)

  

  if (!questions) {
    return <Loading />;
  }

  return (
    <ScrollView>
      {questions && (
        <>
          <Text>{questions.question}</Text>
          {questions.answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswerPress(index)}
            >
              <Text>{answer}</Text>
            </TouchableOpacity>
          ))}
          {selectedAnswerIndex !== null && (
            <TouchableOpacity>
              <Text>Next</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default EducationScreen;
