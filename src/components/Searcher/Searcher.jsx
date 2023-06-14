import { Button, Form, Input } from './Searcher.styled';

const Searcher = ({ onSubmit }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.name.value;
    onSubmit(value);
    form.reset();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="name"
        autocomplete="off"
        placeholder="Search your movie ... "
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Searcher;
