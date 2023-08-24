import { View, Text } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { useState } from 'react';

export default function Payment() {

  const [paymentsuccess,setpaymentsuccess] = useState(false)
  const [usercoins,setusercoins] = useState(0)

const razorpayKeyId = "rzp_test_AsieLfVYqPqP2J"
const razorpayKeySecret = "J7fiHt2fuHkANZ5zBGUl7Ueh"

const amount = 100
const currency = 'INR'
const handlePayment = ()=>{
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: currency,
    key: razorpayKeyId,
    amount: amount * 100,
    name: 'Metalok.io',
    order_id: '',
    prefill: {
      email: 'shankar@metalok.io',
      contact: '9963901869',
      name: 'Shankar'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    console.log('order data',data)
    alert(`Success: ${data.razorpay_payment_id}`);
    setpaymentsuccess(data.razorpay_payment_id)
    setusercoins(usercoins + amount);
    console.log('after payment success ' , amount)
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}

console.log('user coins',usercoins)

console.log('running successfully....')
  return (
    <View>
    <View>
      <Text style={{fontSize:30}}> your coins : {usercoins}</Text>
    </View>


      <Text onPress={handlePayment} style={{backgroundColor:'green', color:'white',fontSize:20,padding:3,textAlign:'center'}}>
        buy coins


      </Text>
    </View>
  )
}