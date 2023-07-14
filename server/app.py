#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response
from flask_restful import Resource
from sqlalchemy import desc

# Local imports
from config import app, db, api
from models import User

from sqlalchemy.exc import IntegrityError

from datetime import date