import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li className={css.contact__item}>
      <p className={css.contact__text}>
        {name}: {number}
      </p>
      <IconButton
        // className={css.contactItem__btn}
        onClick={onDeleteContact}
        type="button"
        colorScheme="blue"
        aria-label="Search database"
        icon={<DeleteIcon />}
      />
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
