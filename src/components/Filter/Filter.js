import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux';
import { FormLabel, Input } from '@chakra-ui/react';

export default function Filer() {
  const filter = useSelector(selectFilter);
  console.log(filter);
  const dispatch = useDispatch();
  const onChange = e => {
    const input = e.currentTarget.value;
    dispatch(changeFilter(input));
  };
  return (
    <FormLabel>
      Find contacts by name
      <Input
        onChange={onChange}
        value={filter}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FormLabel>
  );
}
