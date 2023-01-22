import { Form, useTransition as useNavigation } from "@remix-run/react";

export default function NewNote() {
  const navigation = useNavigation()

  return <Form method="post">
    <p>
      <label htmlFor="title">titulo</label>
      <input type="text" id="title" name="title" required />
    </p>
    <button disabled={navigation.state === 'submitting'}>adicionar</button>
  </Form>
}