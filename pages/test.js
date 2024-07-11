import React from 'react';
import GooglePayButton from '@google-pay/button-react';

const Test = () => {
  return (
    <div>
      <h1 className='my-20'>Google Pay Button Test</h1>
      <GooglePayButton
        environment="TEST" // Use "TEST" for testing purposes
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['AMEX', 'MASTERCARD', 'VISA'],
              },    
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890', // Replace with your actual merchantId
            merchantName: 'krishna jaiswal',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'TOTAL',
            totalPrice: '1.00',
            currencyCode: 'INR',
            countryCode: 'IN',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('load payment data', paymentRequest);
        }}
        onError={error => {
          console.error('Google Pay Error:', error);
        }}
      />
    </div>
  );
};

export default Test;
