import React, { useState } from "react";
import { TextInput, Button, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components";
import { Colors } from "@/constants/Colors";

const MainIcon = styled(Text)`
  font-size: 48px;
  padding: 6px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const InputLabel = styled(Text)`
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 15px;
`;

const InputRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
`;

const MainForm = styled(View)`
  height: 100%;
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
`;

const ThemedInput = styled(TextInput)`
  margin-bottom: 14px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  line-height: 18px;
  padding: 8px;
`;

const SubmitArea = styled(TouchableOpacity)`
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-contents: center;
  background-color: ${Colors.light.primary};
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
`;

const ButtonText = styled(Text)`
  color: ${Colors.light.text};
  font-size: 18px;
`;

export const Input = () => {
  const [date, setDate] = useState(new Date());
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <MainForm>
      <MainIcon>💸</MainIcon>
      <InputRow>
        <InputLabel>Date</InputLabel>
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      </InputRow>
      <InputLabel>Account</InputLabel>
      <ThemedInput
        value={account}
        onChangeText={setAccount}
        placeholder="Enter account"
      />
      <InputLabel>Amount</InputLabel>
      <ThemedInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      <InputLabel>Comment</InputLabel>
      <ThemedInput
        value={comment}
        onChangeText={setComment}
        placeholder="Enter comment"
        multiline
        numberOfLines={3}
      />
      <SubmitArea>
        <ButtonText>Record</ButtonText>
      </SubmitArea>
    </MainForm>
  );
};

export default Input;
