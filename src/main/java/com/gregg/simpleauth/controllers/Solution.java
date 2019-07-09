package com.gregg.simpleauth.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public List<Integer> cellCompete(int[] states, int days)
    {

        List<Integer> States = new ArrayList<>();
        for (int i = 0; i < states.length; i++) {
            States.add(states[i]);
            // accessing each element of array
        }
        List<List<Integer>> statesList = new ArrayList<>();;


        for(int day=1;day<=days;day++)
        {
            List<Integer> myLastStates = new ArrayList<>();;
            List<Integer> myCurrentState = new ArrayList<>();;

            if(statesList.size()>0)
            {
                myLastStates = statesList.get(statesList.size()-1);
            }
            else
                myLastStates = States;

            for(int x =0;x<8;x++)
            {
                int currentState = myLastStates.get(x);
                int leftState = 0;
                int rightState = 0;
                if(x==0)
                {
                    leftState = 0;
                }
                else
                {
                    leftState = myLastStates.get(x-1);
                }

                if(x==7)
                {
                    rightState = 0;
                }
                else
                {
                    rightState = myLastStates.get(x+1);
                }

                if(leftState==rightState)
                    currentState = 0;
                else
                    currentState = 1;
                myCurrentState.add(currentState);
            }
            statesList.add(myCurrentState);
        }
        return statesList.get(statesList.size()-1);
        // WRITE YOUR CODE HERE
    }
}
