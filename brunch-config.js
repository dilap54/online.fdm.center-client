// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js',
  },
  stylesheets: { 
    joinTo: 'app.css'
  },
};

exports.npm = {
  styles: {
    bootstrap: ['dist/css/bootstrap.css']
  }
}

exports.plugins = {
  babel: { 
    presets: ['env', 'react'],
    plugins: ['transform-object-rest-spread']
  },
  sass: {mode: 'native'}
};

exports.hot = false;
