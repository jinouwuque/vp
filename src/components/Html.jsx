
import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';

class Html extends React.Component {
  render() {
    const { 
      title,
      description,
      styles,
      scripts,
      initState,
      children,
    } = this.props;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="robots" content="INDEX,FOLLOW" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         <title>{title}</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        </body>
        <script
          dangerouslySetInnerHTML={{ __html: `window._colorpk=${serialize(initState)}` }}
        />
        {scripts.map(script => (
          <script key={script} src={script} />
        ))}
      </html>
    );
  }
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired,
  ),
  scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
  app: PropTypes.object, // eslint-disable-line
  children: PropTypes.string.isRequired,
};

Html.defaultProps = {
  styles: [],
  scripts: [],
}

export default Html;