'use client'
import { aht_phone_with_country_code } from '@/constants'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function FloatingWhatsappBtn() {
    return (
        <FloatingWhatsApp
            phoneNumber={aht_phone_with_country_code}
            accountName="Al Habib Travel"
            avatar="/favicon.ico"
            buttonStyle={{ width: '45px', height: '45px' }}
            statusMessage='Typically replies within 1 minute'
        />
    )
}
