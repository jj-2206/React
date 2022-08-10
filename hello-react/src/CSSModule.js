import classNames from 'classnames/bind';
import styles from './styling/CSSModule.module.scss';

const cnBind = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cnBind('wrapper', 'inverted')}>
      {/* <div className={`${styles.wrapper} ${styles.inverted}`}> */}
      안녕하세요. 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
