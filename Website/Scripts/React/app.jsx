class App extends React.Component {
    
    render() {       
        return (
            <div>
                <div className="container">
                    <h2 className="breadcrumb">Contact Us</h2>
                    <div className="well">
                        <MainForm />
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('content'));
