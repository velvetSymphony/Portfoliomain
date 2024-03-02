#!/usr/bin/env python3
import psycopg
import logging
import os
import sys

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def update_table(*, db_name, db_user, db_password, db_port, user_host, trail_name):
    with psycopg.connect(
        dbname=db_name, user=db_user, host=user_host, port=db_port, password=db_password
    ) as conn:
        logging.info("Updating obtained trail record's counter by 1...")
        update_command = f"UPDATE treks SET trail_counter = trail_counter + 1 WHERE trail_name = \'{trail_name}\'"
        conn.execute(update_command)


if __name__ == "__main__":
    trail_name = sys.argv[1]
    db_name = os.environ.get('DB_NAME')
    db_user = os.environ.get('DB_USER')
    db_password = os.environ.get('DB_PASS')
    db_port = 5432
    user_host = os.environ.get('HOSTNAME')

    update_table(
        db_name=db_name,
        db_user=db_user,
        db_port=db_port,
        db_password=db_password,
        user_host=user_host,
        trail_name=trail_name
    )
    logging.info('Succesfully updated the record in the database :D')
