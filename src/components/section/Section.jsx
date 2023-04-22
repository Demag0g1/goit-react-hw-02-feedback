import PropTypes from 'prop-types';
import css from './Section.module.css';

export const SectionWrap = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

SectionWrap.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
