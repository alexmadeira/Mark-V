import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.shape({
      preload: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
    alt: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    alt: '',
  };

  state = {
    loaded: false,
  };

  onImageLoaded() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1000);
  }

  render() {
    const {
      state: { loaded },
      props: { className, src, alt },
    } = this;

    const classImage = classNames(className, 'lt-image', { _loaded: loaded });

    return (
      <div className={classImage}>
        <img className="preload" src={src.preload} alt="preload" />
        <img
          className="content"
          src={src.content}
          alt={alt}
          onLoad={this.onImageLoaded.bind(this)}
        />
      </div>
    );
  }
}

export default Image;
