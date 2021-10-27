import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

function Budget() {
	const [transactions, setTransactions] = useState([]);
	const [overallSum, setOverallSum] = useState(0);

	function addTransaction(amount, description) {
		const newTransaction = <Transaction amount={amount} description={description} />

		setTransactions(transactions.concat(newTransaction))
		setOverallSum(overallSum + amount)
	};

	return (
		<Container>
			<Row>
				<Col>
					<TransactionsTable transactions={transactions} overallSum={overallSum}/>
				</Col>
				<Col>
					<TransactionForm
						addTransaction={(amount, description) => addTransaction(amount, description)}
					/>
				</Col>
			</Row>
		</Container>
	)
}

class TransactionForm extends React.Component {
	handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit.');
    this.props.addTransaction(e.target[0].value, e.target[1].value)
  }

	render() {
		return (
			<Row>
				<Form onSubmit={this.handleSubmit}>
					<h1> Enter a transaction below! </h1>
				  <Col md>
				    <FloatingLabel controlId="floatingInputGrid" label="Amount">
				      <Form.Control size="sm" type="text" placeholder="$10.50" />
				    </FloatingLabel>
				  </Col>
				  <Col md>
				    <FloatingLabel controlId="floatingInputGrid" label="Summary">
				      <Form.Control type="text" placeholder="Groceries - Walmart" />
				    </FloatingLabel>
				  </Col>

				  <Button variant="primary" type="submit">
				  	Submit
				  </Button>
				 </Form>
			</Row>
		)
	}
}

function Transaction(props) {
	return (
		<tr>
			<td>{props.amount}</td>
			<td>{props.description}</td>
		</tr>
	)
};

class TransactionsTable extends React.Component {
	render() {
		const transactions = this.props.transactions

		return (
			<div>
				<h1> Budget summary - {this.props.overallSum} </h1>

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
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Budget />,
	document.getElementById('root')
);
