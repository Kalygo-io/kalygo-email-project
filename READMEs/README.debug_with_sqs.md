# SQS

References:
[1] https://docs.aws.amazon.com/cli/latest/reference/sqs/receive-message.html
[2] https://docs.aws.amazon.com/cli/latest/reference/sqs/delete-message.html

aws sqs receive-message --queue-url https://sqs.us-east-1.amazonaws.com/333427308013/EmailDeliveryStatusQueue --attribute-names All --message-attribute-names All --max-number-of-messages 10

aws sqs delete-message --queue-url https://sqs.us-east-1.amazonaws.com/333427308013/EmailDeliveryStatusQueue --receipt-handle AQEB8jRO0gggWKY7nCdyxG/kc19BkcaZAwzbgLSBStrwvC3GjDrmlbKo9D/jVNRY90CJ8L235HfzgcCKaUWYacmsfEbApVQEVrVzjVytqNX/0y8Dc16NoSVQxEbj0hxLPjgqqG5XxL1/iMRmtQU54q0NvO75QWwitjz6B2nt87aJ2t9vcW4AFSXICp8Cdo7zXaFdVDYb3SXYBrS5aaf1eNCCD1uvfQ1umPwzWim9QVIJf28BWmVc48w53ZVJuxf8aDD0tyah9WCOInk3P0rmAW3Uo0FwyWmHy28RCfT9G6AhNpXhd1SFKh+XpAe9U2L31il7h1Un7i0rsPCQmg83HdWgEL5j9O2KHUE+bnDR8ViJqlJ8Wzf+MVaZIVukIhSGM3cxhqOOKRX8a9oaGPOY8m1UAA==