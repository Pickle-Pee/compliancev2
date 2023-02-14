import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuestionScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch('https://your-backend-api.com/questions');
      const data = await response.json();
      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const onAnswerSelect = async (answerId) => {
    setSelectedAnswers([...selectedAnswers, answerId]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex + 1 === questions.length) {
      navigation.navigate('Result');
    }
  };

  return (
    <View>
      <Text>{currentQuestion.text}</Text>
      {currentQuestion.answers.map((answer) => (
        <TouchableOpacity
          key={answer.id}
          onPress={() => onAnswerSelect(answer.id)}>
          <Text>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuestionScreen;
