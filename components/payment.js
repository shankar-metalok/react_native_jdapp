import { View, Text } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { useState } from 'react';

export default function Payment() {

  const [paymentsuccess,setpaymentsuccess] = useState(false)
  const [usercoins,setusercoins] = useState(0)


 const userId = "64e89dc6ee02a42d0e562e12"

 



const razorpayKeyId = "rzp_test_AsieLfVYqPqP2J"
const razorpayKeySecret = "J7fiHt2fuHkANZ5zBGUl7Ueh"

const amount = 10000
const purchaseamount = 100

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

    fetch(`http://192.168.0.181:5000/update-account-balance/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ additionalAmount: amount })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    




  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}

console.log('user coins',usercoins)

console.log('running successfully....')



const handlesongreq =()=>{
  fetch(`http://192.168.0.181:5000/make-purchase/${userId}`, {


      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ purchaseAmount: purchaseamount })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      setusercoins(usercoins -  purchaseamount);


}



  return (
    <View>
    <View>
      <Text style={{fontSize:30}}> your coins : {usercoins}</Text>
    </View>


      <Text onPress={handlePayment} style={{backgroundColor:'green', color:'white',fontSize:20,padding:3,textAlign:'center',marginBottom:20}}>
        buy coins


      </Text>
      <Text style={{fontSize:30}}>
      request song amount :
        { purchaseamount}
      </Text>

      <Text onPress={handlesongreq} style={{backgroundColor:'green', color:'white',fontSize:20,padding:3,textAlign:'center'}}>
        Request for song


      </Text>
    </View>
  )
}