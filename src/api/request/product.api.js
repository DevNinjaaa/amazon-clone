import { gql } from "@apollo/client";

export const SET_PRODUCT_MUTATION = gql`
  mutation SetProduct(
    $name: String
    $description: String
    $price: Float
    $image: String
    $category_id: String
    $quantity: Int
  ) {
    setProduct(
      name: $name
      description: $description
      price: $price
      image: $image
      category_id: $category_id
      quantity: $quantity
    ) {
      product_id
      name
      description
      price
      image
      category_id
      availability
      quantity
    }
  }
`;
export const SET_PRODUCT_IMGE_MUTATION = gql`
  mutation setImage($name: String, $img_url: String, $image_counter: Int) {
    setImage(name: $name, img_url: $img_url, image_counter: $image_counter) {
      name
      img_url
      image_counter
    }
  }
`;
