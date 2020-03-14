FROM cypress/included:4.1.0
RUN mkdir -p /e2eTest
WORKDIR /e2eTest
COPY . /e2eTest/
RUN npm install
CMD ["npm", "run", "cy"]