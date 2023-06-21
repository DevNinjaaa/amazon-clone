import React, { useState, useCallback } from "react";
import { gql, useMutation } from "@apollo/client";
import { useDropzone } from "react-dropzone";
import { SET_PRODUCT_IMGE_MUTATION } from "../../../api/request/product.api.js";
import { isUUID } from "../../../utils/utils.js";
import Dropzone from "react-dropzone";

import {
  StyledFormContainer,
  StyledGolobal,
  StyledCategories,
  StyledFormInputs,
  StyledForm,
  SyledInput,
  SyledLabel,
  StyledBullut,
  StyledBullutInfo,
  StyledP,
  StyledBtn,
} from "./uploading.js";
import {
  productCategories,
  getIdByCategory,
} from "../../../data/navCategories/categories.js";

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const SellerCentralUpload = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [uploadFile] = useMutation(uploadFileMutation, {});
  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { file } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleDrop = (acceptedFiles) => {
    const filePath = acceptedFiles[0].path;
    console.log("File path:", filePath);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the mutation with form field values
    if (
      typeof name === "string" &&
      typeof description === "string" &&
      typeof price === "number" &&
      typeof image === "string" &&
      typeof categoryId === "string" &&
      typeof quantity === "number"
    ) {
      if (isUUID(categoryId)) {
        // return await setProduct({
        //   variables: {
        //     name,
        //     description,
        //     price,
        //     image,
        //     categoryId,
        //     quantity,
        //   },
        // });
      }
    }

    console.log("hello world");
    setName("");
    setDescription("");
    setPrice(0);
    setImage("");
    setCategoryId("");
    setQuantity(0);
  };

  return (
    <StyledGolobal>
      <StyledFormContainer>
        <StyledFormInputs>
          <StyledBullutInfo>
            <StyledBullut>1</StyledBullut> Information
          </StyledBullutInfo>
          <StyledForm action="" method="post" onSubmit={handleSubmit}>
            <SyledLabel htmlFor="name">Name Your Product</SyledLabel>
            <SyledInput
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <SyledLabel htmlFor="price">Price Your Product</SyledLabel>
            <SyledInput
              type="number"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <SyledLabel htmlFor="description">
              Give A Clear Description, Shorter Is Better
            </SyledLabel>
            <SyledInput
              type="text"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <SyledLabel htmlFor="quantity">How Many You can Sell</SyledLabel>
            <SyledInput
              type="number"
              name="quantity"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <StyledBtn value="submit" type="submit" />
          </StyledForm>
        </StyledFormInputs>
        <StyledBullutInfo>
          <StyledBullut>2</StyledBullut> Set Category
        </StyledBullutInfo>
        {productCategories.map((category) => (
          <StyledCategories
            key={category}
            value={category}
            onClick={() =>
              setCategoryId(getIdByCategory(category.toLowerCase()))
            }
          >
            {category}
          </StyledCategories>
        ))}
        <StyledBullutInfo>
          <StyledBullut>3</StyledBullut> Upload The Product Image
        </StyledBullutInfo>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </StyledFormContainer>
    </StyledGolobal>
  );
};
