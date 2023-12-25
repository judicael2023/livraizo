'use client';

import React from 'react';
import { Surface, Avatar, Box, Text } from '@axazara/raiton-atoms';
import { transformArrayForCarousel } from './../utils';

export function DeliversCardSlider() {
  const [paymentMethods, setPaymentMethods] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    fetch('https://moneroo-api.axaship.com/utils/payment/methods')
      .then((response) => response.json())
      .then((data) => setPaymentMethods(transformArrayForCarousel(data.data, data.data.length)));
  }, []);

  return (
    <Box style={{ '--slider-item-count': paymentMethods[0]?.length } as any}>
      <Box className="grid relative overflow-hidden place-items-center w-full">
        <Box
          className="mt-24 flex justify-between w-full gap-10 method-animation"
          style={{ width: 'calc(272px * var(--slider-item-count))', animation: 'slide 150s linear infinite' }}
        >
          {paymentMethods[0]?.map((method: any, index: number) => {
            return (
              <Surface key={`${method.code}-${index}`} radius={24} className="bg-primary p-5 w-full min-w-[272px]">
                <Avatar size={70} className="mb-4" src={method.icon_url} />
                <Text className="text-heading-06-semibold text-neutral-30">{method.name}</Text>
              </Surface>
            );
          })}
        </Box>
      </Box>
      <Box className="grid relative overflow-hidden place-items-center w-full">
        <Box
          className="mt-8 flex justify-between w-full gap-10 method-animation"
          style={{ width: 'calc(272px * var(--slider-item-count))', animation: 'slide 150s linear infinite reverse' }}
        >
          {paymentMethods[1]?.map((method: any, index: number) => {
            return (
              <Surface key={`${method.code}-${index}`} radius={24} className="bg-primary p-5 w-full min-w-[272px]">
                <Avatar size={70} className="mb-4" src={method.icon_url} />
                <Text className="text-heading-06-semibold text-neutral-30">{method.name}</Text>
              </Surface>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
