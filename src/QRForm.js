import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
var QRCode = require('qrcode.react')

export class QRForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currencyCode: '',
      decimals: '',
      name: '',
      contractAddress: ''
    }
  }

  onChangeCurrencyCode = (e) => {
    const currencyCode = e.target.value
    this.setState({
      currencyCode
    })
  }

  onChangeName = (e) => {
    const name = e.target.value
    this.setState({
      name
    })
  }

  onChangeDecimals = (e) => {
    const decimals = parseInt(e.target.value)
    this.setState({
      decimals
    })
  }

  onChangeContractAddress = (e) => {
    const contractAddress = e.target.value
    this.setState({
      contractAddress
    })
  }

  render () {
    const { contractAddress, currencyCode, decimals, name } = this.state
    const uri = `ethereum:token-${contractAddress}?symbol=${currencyCode}&decimals=${decimals}&name=${name}`
    return (
      <div>
        <Row>
          <div style={{ width: '512px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
            <Form className='qr-code-form'>
              <FormGroup className={'form-group'}>
                <Label>Currency Code:</Label>
                <Input style={{ fontSize: '16px', lineHeight: '24px' }} size={42} onChange={this.onChangeCurrencyCode} type="text" placeholder="WETH" />
              </FormGroup>
              <FormGroup className={'form-group'}>
                <Label>Currency Name:</Label>
                <Input style={{ fontSize: '16px', lineHeight: '24px' }} size={42} onChange={this.onChangeName} type="text" placeholder="WrappedEthereum" />
              </FormGroup>
              <FormGroup className={'form-group'}>
                <Label>Contract Address:</Label>
                <Input style={{ fontSize: '16px', lineHeight: '24px' }} size={42} onChange={this.onChangeContractAddress} type="text" placeholder="0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" />
              </FormGroup>
              <FormGroup className={'form-group'}>
                <Label>Decimal Places:</Label>
                <Input style={{ fontSize: '16px', lineHeight: '24px' }} size={42} onChange={this.onChangeDecimals} type="text" placeholder="18" />
              </FormGroup>
              <br />
            </Form>
            <p style={{ textAlign: 'center' }}>{uri}</p>
            <QRCode value={uri} />
          </div>
        </Row>
      </div>
    )
  }
}