pipeline {
    agent any

    environment {
        IMAGE_NAME = 'task-app'
        CONTAINER_NAME = 'task-container'
        HOST_PORT = '3000'
        CONTAINER_PORT = '5000'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/your-username/task-manager-app-updated.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Stop Old Container (if running)') {
            steps {
                sh """
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                """
            }
        }

        stage('Run New Docker Container') {
            steps {
                sh "docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME"
            }
        }
    }

    post {
        success {
            echo '✅- CI/CD Successful! Your application is live!'
        }
        failure {
            echo '❌ Something failed. Check the logs.'
        }
    }
}
