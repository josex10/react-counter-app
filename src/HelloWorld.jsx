import PropTypes from 'prop-types';

export const HelloWorld = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

HelloWorld.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
  name: 'Jose Manuel Badilla Porras - default',
  subTitle: 'Without subtitle prop - default'
};
