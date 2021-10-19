import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

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
	constructor(props) {
		super(props);
		this.state = {
			amount: 0,
			summary: '',
		};
	}

	render() {
		return (
			<tr>
				<td>this.state.amount</td>
				<td>this.state.summary</td>
			</tr>
		)
	};
}

class TransactionsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transactions: [],
			overallSum: 0,
		};
	}

	render() {
		const transactions = this.state.transactions

		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th> Amount </th>
						<th> Summary </th>
					</tr>
				</thead>

				<tbody>
					{transactions}
				</tbody>
			</Table>
		);
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


