'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Button, Text } from '@axazara/raiton-atoms';

export default function Page(): JSX.Element {
  return (
    <Box>
      <Box className="bg-neutral-10">
        <Box className="md:max-w-7xl mx-auto mb-10">
          <Box className="flex justify-between items-center py-5 mb-5">
            <Box className="flex items-center space-x-10">
              <Image src="/assets/livraizo-logo.svg" alt="logo" width={200} height={200} />
              <Box className="flex gap-3">
                <Text className="text-white text-heading-05-sm">About</Text>
                <Text className="text-white text-heading-05-sm">A propos</Text>
              </Box>
            </Box>
            <Box className="flex gap-5">
              <Button variant="subtle" className="text-white">
                Log in
              </Button>
              <Button variant="filled" className="bg-white text-black">
                Créer un compte
              </Button>
            </Box>
          </Box>
          <Box className="flex justify-center mb-12">
            <Text className="text-display-04 text-white w-3/4">Vous êtes à la recherche d’un livreur ? C’est ici.</Text>
          </Box>
          <Box className="flex justify-center">
            <Image src="/assets/hero-illustration.svg" height={320} width={1168} alt="hero" />
          </Box>
          <Box className="flex flex-row gap-4 justify-center pt-10">
            <Button variant="filled" className="bg-white text-black">
              Trouver un livreur
            </Button>
            <Button variant="filled" className="bg-[#353434]">
              Devenir un livreur
            </Button>
          </Box>
        </Box>
        <Box className="bg-white pt-10">
          <Box className="md:max-w-5xl mx-auto mb-20">
            <Box className="flex md:justify-between items-center space-x-10">
              <Box>
                <Text className="text-display-04 mb-2">Devenez livreur, gagnez de l’argent.</Text>
                <Text component="p">Créez votre compte et commencez à livrer.</Text>
                <Box className="flex flex-row gap-4 pt-10">
                  <Button variant="filled" className="bg-[#353434]">
                    Devenir un livreur
                  </Button>
                  <Button variant="filled" className="bg-[#003932] text-white">
                    Trouver un livreur
                  </Button>
                </Box>
              </Box>
              <Image src="/assets/delivers.svg" width={512} height={543} alt="delivers-illustration" />
            </Box>
          </Box>
          <Box className="md:max-w-5xl mx-auto mb-10">
            <Box className="flex md:justify-between items-center space-x-10">
              <Image src="/assets/delivers.svg" width={512} height={543} alt="delivers-illustration" />
              <Box>
                <Text className="text-display-04 mb-2">Livraizo, c’est gratuit. Trouvez votre livreur</Text>
                <Text component="p">Lorem ipsum dolor sit amet consectetur. Netus integer sed diam egestas faucibus.</Text>
                <Box className="flex flex-row gap-4 pt-10">
                  <Button variant="filled" className="bg-[#353434]">
                    Devenir un livreur
                  </Button>
                  <Button variant="filled" className="bg-[#003932] text-white">
                    Trouver un livreur
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
