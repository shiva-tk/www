{-# LANGUAGE OverloadedStrings #-}

module Main where

import Web.Scotty
import Network.Wai.Middleware.Static (staticPolicy, addBase)

main :: IO ()
main = scotty 3000 $
  middleware $ staticPolicy (addBase "../frontend/dist/")
