'use client';

import React from 'react';
import { Box, Divider, Text } from '@axazara/raiton-atoms';
import Image from 'next/image';
import { WhatsappOutline, FacebookOutline } from '@axazara/raiton-icons';

export function Footer() {
  return (
    <Box className="bg-neutral-10 py-10">
      <Box className="max-w-7xl mx-auto">
        <Box className="flex justify-between items-center">
          <Box>
            <Image src="/assets/livraizo-logo.svg" alt="logo" width={200} height={200} />
          </Box>
          <Box className="flex gap-4">
            <Text className="text-white text-heading-05-sm">A propos</Text>
            <Text className="text-white text-heading-05-sm">Blog</Text>
          </Box>
          <Box className="flex gap-4">
            <WhatsappOutline className="w-5 h-5 text-white" />
            <FacebookOutline className="w-5 h-5 text-white" />
          </Box>
        </Box>
        <Box className="mt-4 mb-5">
          <Divider className="border-white" />
        </Box>
        <Box className="flex justify-between items-center">
          <Box className="flex">
            <span className="mr-1 text-white text-heading-05-sm">©</span>
            <Text className="text-white text-heading-05-sm">
              {' '}
              {new Date().getFullYear()} Livraizo, all rights reserved.
            </Text>
          </Box>
          <Box className="flex gap-4">
            <Text className="text-white text-heading-05-sm">Privacy</Text>
            <Text className="text-white text-heading-05-sm">Terms</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
