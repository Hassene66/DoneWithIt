import React, { useState } from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
const FormImagePicker = ({ name }) => {
  const [imageUris, setImageUris] = useState([]);

  const { errors, setFieldValue, touched, values } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri != uri)
    );
  };
  return (
    <View>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default FormImagePicker;
