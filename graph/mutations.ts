export const subscribe = gql`
  mutation Create_Contact_item($email: String, $name: String) {
    create_Contact_item(
      data: { email: $email, name: $name, status: "published" }
    )
  }
`;

export const contact = gql`
  mutation Create_Contact_item(
    $email: String
    $name: String
    $message: String
    $phone: String
    $source: String
  ) {
    create_Contact_item(
      data: {
        email: $email
        name: $name
        status: "published"
        message: $message
        phone: $phone
        source: $source
      }
    )
  }
`;
