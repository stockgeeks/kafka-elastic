FROM wurstmeister/kafka:2.12-2.3.0

# we replace the default connect-distributed.properties so we can properly resolve to our local kafka docker development
COPY connect-distributed.properties /opt/kafka/config/

# we replace the start command creating a connector instead.
COPY start-kafka.sh /usr/bin/

RUN chmod a+x /usr/bin/start-kafka.sh
