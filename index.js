// The `decorateTerm` hook allows our extension to return a higher order react component.
// It supplies us with:
// - Term: The terminal component.
// - React: The enture React namespace.
// - notify: Helper function for displaying notifications in the operating system.
exports.decorateTerm = (Term, { React, notify }) => {
  // Define and return our higher order component.
  return class extends React.Component {
      constructor (props, context) {
        super(props, context);
        this._onTitle = this._onTitle.bind(this);
        this._focus - this._focus.bind(this);
        this._title = null;
    }
    _onTitle(title, uid){
      if (this.props.onTitle) this.props.onTitle(title, uid);
      this._title = title;
      if (this.props.isTermActive) {
        document.getElementsByTagName('title')[0].text = this._title;
      }
    }
    _focus(){
      // Set page title element when we get focus.
      document.getElementsByTagName('title')[0].text = this._title;
    }
    render() {
      // Return the default Term component with our custom onTerminal closures
      return React.createElement(Term, Object.assign({}, this.props, {
        onTitle: this._onTitle,
        focus: this._focus
      }));
    }
  }
};
