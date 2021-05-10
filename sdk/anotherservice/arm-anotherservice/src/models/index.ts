/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Mocked result.
 * @summary Test Get.
 */
export interface TestGetResult {
  /**
   * Test result. Test result.
   */
  value?: string;
}

/**
 * An interface representing AnotherServiceClientOptions.
 */
export interface AnotherServiceClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the get operation.
 */
export type TestGetResponse = TestGetResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TestGetResult;
    };
};
