import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  maxMeow: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  maxMeow: 10,
  color: 'deeppink',
};

const Cat = props => {
  const [meows, setMeows] = useState(0);

  const meow = () => {
    if (meows < props.maxMeow) {
      setMeows(old_meows_count => old_meows_count + 1);
    } else {
      Alert.alert(`${props.name} already meowed too much !`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>
          {props.name}
          <Text className="age">({props.age} yo)</Text>
        </Text>

        <Text className="max">
          meows: {meows} / {props.maxMeow}
        </Text>
      </View>
      <Button onPress={meow} title="Meow" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'pink',
    borderWidth: StyleSheet.hairlineWidth,
  },
  name: {
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
});

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
