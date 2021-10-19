import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Budget extends React.Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col>
						<TransactionsTable />
					</Col>
					<Col>
						<TransactionForm />
					</Col>
				</Row>
			</Container>
		)
	}
}

class Transaction extends React.Component {

}

class TransactionsTable extends React.Component {
	render() {
		return null
	}
}

class TransactionForm extends React.Component {
	render() {
		return null
	}
}

// ========================================

ReactDOM.render(
	<Budget />,
	document.getElementById('root')
);


