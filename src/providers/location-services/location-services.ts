import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

/*
  Send me your location
Let's focus on communicatin' 'cause
I just need the time and place to come through
(A place to come through)
Send me your location
Let's ride the vibrations
I don't need nothin' else but you (I don't need nothin' else but)
At times I wonder why I fool with you
But this is new to me, this is new to you
Initially, I didn't wanna fall for you
Gather my attention it was all for you, so don't
Take advantage, don't leave my heart damaged
To understand that things go a little bit better when you plan it
So won't you send me, your location 
Let's focus on communicatin' 'cause
I just need the time and place to come through
Send me your location 
Let's ride the vibrations
I don't need nothing else but you (I don't need nothin' else)
I don't wanna fall in love off of subtweets so
Let's get personal
I got a lot of cool spots that we can go
Tell me what's the move and I got you
I'm only acting like this 'cause I like you
Just give me the vibe to slide then
Oh, I might make you mine by the night
Send me your location 
Let's focus on communicatin' 'cause
I just need the time and place to come through
(A place to come through)
Send me your location 
Let's ride the vibrations
I don't need nothing else but you (I don't need nothin' else but you)
Ride, ride, ride, come and vibe with me tonight
I don't need nothing else but you
(I don't need nothing else but you)
Ride, ride, ride, come and vibe with me tonight
I don't need nothing else but you
Nothing else but you
Do, do, do, do, do, do
Oh, oh, mmm, mmm, mmm, mmm
Oh, oh, oh
Oh, oh, oh, mmm, mmm, mmm
Do, do, do, do, do, do, do
Do, do, do, do, do, do, do
I don't need nothing else but you
*/
@Injectable()
export class LocationServicesProvider {

  constructor(private geolocation: Geolocation) { }

  getLocation(): Promise<Geoposition> {
    console.log('get location');
    return this.geolocation.getCurrentPosition();
  }
}
