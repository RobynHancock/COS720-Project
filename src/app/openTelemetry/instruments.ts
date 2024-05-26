import {registerInstrumentations } from '@opentelemetry/instrumentation';
import {WebTracerProvider} from '@opentelemetry/sdk-trace-web';
import {ConsoleSpanExporter, SimpleSpanProcessor, BatchSpanProcessor} from '@opentelemetry/sdk-trace-web';
//import {OLTPTraceExporter} from '@opentelemetry/exporter-trace-otlp-http';
import {getWebAutoInstrumentations} from '@opentelemetry/auto-instrumentations-web';

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()))/* */;
//provider.addSpanProcessor(new BatchSpanProcessor(new OLTPTraceExporter ({
  //  url: 'https://api.honeycomb.io/v1/traces',
  //  headers: {
    //    'x-honeycomb-team': "gmx2gyInWY3nvbknRUqLyB",
    //},
//}),),);
provider.register();

registerInstrumentations ({
    instrumentations: [
        getWebAutoInstrumentations({
            '@opentelemetry/instrumentation-document-load': {},
            '@opentelemetry/instrumentation-user-interaction': {},
            '@opentelemetry/instrumentation-fetch': {},
            '@opentelemetry/instrumentation-xml-http-request': {},
        }),
    ],
});