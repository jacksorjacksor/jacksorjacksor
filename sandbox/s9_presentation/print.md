Last week, we wrote a function that lets us ask for the weather in two different cities. That function would always return three dicts: One each for the two requested cities, and a third describing the difference in weather between the two cities.

This week, we're going to improve this cache in two different ways:

First, we're going to make it smarter, such that it doesn't keep information about a city forever. Rather, it'll only keep weather information for two hours. After two hours expire, it'll "forget" what it knew for a city, and retrieve it anew from OpenWeatherMap. We'll do that by changing our dict into a more complex data structure. The main key will still be the city, but the value will then be a two-key dict, "updated_at" and "info". The former will contain the Unix time of when the cache entry was updated, and the latter will contain the dict that we previously stored.

In other words, our dict will look like:

    {'city_one': {'updated_at': 12345,
                  'info': {'wind': 123, 'temp': 45}},
     'city_two: {'updated_at': 23456,
                  'info': {'wind': 45, 'temp': 12}}
    }

Second, we're going to make the cache permanent, storing it to disk and retrieving it via Python's "pickle" library.

Truly useful and efficient caching is a very hard problem to solve, and we're not going to try to do it here. Instead, what we'll do is a fairly simple cache algorithm:

    If it exists, the cache will be loaded when the module is loaded.
    Every time we invoke get_location_weather, we'll check to see if the address is in the cache (as a key).
    If the key exists, but the time has expired, we'll remove the entry from the cache.
    If the key doesn't exist, then we'll retrieve the value from OpenWeatherMap and stick it in the cache.
    We'll then store the cache to disk.  And yes, storing the cache to disk with each request is fairly expensive and un-cache-like, but we're not seriously planning to use this cache in a high-stakes production environment.

The goal for this week is to gain some familiarity with Python's "pickle" module, which makes it pretty easy to create such caches, storing and retrieving Python objects to and from the filesystem. You can learn more about "pickle" here:

    https://docs.python.org/3/library/pickle.html

I've enclosed a few tests that (still) go to the live OWM site.

I'll be back with a solution on Monday.

Until then,

Reuven

    ```python

import pytest
import time
import pickle
from mygeopy import compare_weather, cache, cache_filename

def test_compare_weather():
first, second, compare = compare_weather('Modiin, Israel',
'London, England')

    assert isinstance(first, dict)
    assert isinstance(second, dict)
    assert isinstance(compare, dict)

    assert first.keys() == second.keys()
    assert 'temp' in compare
    assert 'wind' in compare

    assert first['temp'] - second['temp'] == compare['temp']
    assert first['wind'] - second['wind'] == compare['wind']

    assert 'Modiin, Israel' in cache
    assert 'London, England' in cache

    assert len(cache) == 2

    saved_cache = pickle.load(open(cache_filename, 'rb'))
    assert len(saved_cache) == 2
