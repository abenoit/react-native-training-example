import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const propTypes = {
  addCat: PropTypes.func.isRequired,
};

const CatForm = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(1);
  const [maxMeow, setMaxMeow] = useState(10);

  const isSubmitDisabled = () => {
    return !name || !age;
  };

  const addCat = () => {
    props.addCat({
      name,
      age,
      maxMeow,
    });

    setName('');
    setAge(1);
    setMaxMeow(10);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Add a new cat </Text>
      <View className="inputs">
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />

        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          type="number"
          placeholder="Age"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={setMaxMeow}
          value={maxMeow}
          type="number"
          keyboardType="numeric"
          placeholder="Max meows"
        />
      </View>

      <Button
        onPress={addCat}
        disabled={isSubmitDisabled()}
        title="Add this cat"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

CatForm.propTypes = propTypes;
export default CatForm;
